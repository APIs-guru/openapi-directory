import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessSetAcldbPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=databaseName" })
  databaseName: string;
}


export class AccessSetAcldbRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccessSetAcldbPathParams;
}


export class AccessSetAcldbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessSetAcldb200ApplicationJsonString?: string;
}
