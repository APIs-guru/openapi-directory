import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPipelineVariablesForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetPipelineVariablesForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineVariablesForUserPathParams;
}


export class GetPipelineVariablesForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
