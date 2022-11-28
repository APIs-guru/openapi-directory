import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupsIdPathParams;
}


export class GetGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoGroupsGroup?: shared.ApiCoreDtoGroupsGroup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
