import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateUsingTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_owner" })
  templateOwner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_repo" })
  templateRepo: string;
}


export class ReposCreateUsingTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=include_all_branches" })
  includeAllBranches?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;
}


export class ReposCreateUsingTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateUsingTemplatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateUsingTemplateRequestBody;
}


export class ReposCreateUsingTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  repository?: shared.Repository;
}
