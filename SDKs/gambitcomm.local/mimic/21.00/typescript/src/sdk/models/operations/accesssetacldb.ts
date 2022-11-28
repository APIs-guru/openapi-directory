import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessSetAcldbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class AccessSetAcldbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccessSetAcldbPathParams;
}


export class AccessSetAcldbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessSetAcldb200ApplicationJsonString?: string;
}
