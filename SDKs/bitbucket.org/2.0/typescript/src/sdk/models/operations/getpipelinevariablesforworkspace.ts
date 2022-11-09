import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPipelineVariablesForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineVariablesForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineVariablesForWorkspacePathParams;
}


export class GetPipelineVariablesForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
