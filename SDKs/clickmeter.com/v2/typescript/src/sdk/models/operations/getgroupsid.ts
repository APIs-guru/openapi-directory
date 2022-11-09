import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupsIdPathParams;
}


export class GetGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoGroupsGroup?: shared.ApiCoreDtoGroupsGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
