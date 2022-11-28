import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOwnerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetOwnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOwnerPathParams;
}


export class GetOwnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOwner200ApplicationJsonString?: string;
}
