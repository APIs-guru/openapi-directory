import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TypeaheadForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}

export enum TypeaheadForWorkspaceResourceTypeEnum {
    CustomField = "custom_field",
    Portfolio = "portfolio",
    Project = "project",
    Tag = "tag",
    Task = "task",
    User = "user"
}

export enum TypeaheadForWorkspaceTypeEnum {
    CustomField = "custom_field",
    Portfolio = "portfolio",
    Project = "project",
    Tag = "tag",
    Task = "task",
    User = "user"
}


export class TypeaheadForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType: TypeaheadForWorkspaceResourceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TypeaheadForWorkspaceTypeEnum;
}


// TypeaheadForWorkspace200ApplicationJson
/** 
 * A generic list of objects, such as those returned by the typeahead search endpoint.
**/
export class TypeaheadForWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AsanaNamedResource })
  data?: shared.AsanaNamedResource[];
}


export class TypeaheadForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TypeaheadForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: TypeaheadForWorkspaceQueryParams;
}


export class TypeaheadForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  typeaheadForWorkspace200ApplicationJsonObject?: TypeaheadForWorkspace200ApplicationJson;
}
