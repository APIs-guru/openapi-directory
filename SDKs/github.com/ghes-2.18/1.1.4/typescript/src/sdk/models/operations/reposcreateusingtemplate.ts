import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateUsingTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_owner" })
  templateOwner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_repo" })
  templateRepo: string;
}


export class ReposCreateUsingTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=include_all_branches" })
  includeAllBranches?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;
}


export class ReposCreateUsingTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateUsingTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateUsingTemplateRequestBody;
}


export class ReposCreateUsingTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  repository?: shared.Repository;
}
