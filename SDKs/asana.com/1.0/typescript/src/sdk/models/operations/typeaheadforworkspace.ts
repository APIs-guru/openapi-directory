import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TypeaheadForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}

export enum TypeaheadForWorkspaceResourceTypeEnum {
    CustomField = "custom_field"
,    Portfolio = "portfolio"
,    Project = "project"
,    Tag = "tag"
,    Task = "task"
,    User = "user"
}

export enum TypeaheadForWorkspaceTypeEnum {
    CustomField = "custom_field"
,    Portfolio = "portfolio"
,    Project = "project"
,    Tag = "tag"
,    Task = "task"
,    User = "user"
}


export class TypeaheadForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType: TypeaheadForWorkspaceResourceTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TypeaheadForWorkspaceTypeEnum;
}


export class TypeaheadForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TypeaheadForWorkspacePathParams;

  @Metadata()
  queryParams: TypeaheadForWorkspaceQueryParams;
}


// TypeaheadForWorkspace200ApplicationJson
/** 
 * A generic list of objects, such as those returned by the typeahead search endpoint.
**/
export class TypeaheadForWorkspace200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.AsanaNamedResource })
  data?: shared.AsanaNamedResource[];
}


export class TypeaheadForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  typeaheadForWorkspace200ApplicationJsonObject?: TypeaheadForWorkspace200ApplicationJson;
}
