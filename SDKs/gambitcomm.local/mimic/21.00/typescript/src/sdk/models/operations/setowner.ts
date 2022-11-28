import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetOwnerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;
}


export class SetOwnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetOwnerPathParams;
}


export class SetOwnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setOwner200ApplicationJsonString?: string;
}
