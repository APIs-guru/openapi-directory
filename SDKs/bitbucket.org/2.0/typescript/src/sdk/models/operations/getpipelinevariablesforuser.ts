import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPipelineVariablesForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetPipelineVariablesForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineVariablesForUserPathParams;
}


export class GetPipelineVariablesForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
