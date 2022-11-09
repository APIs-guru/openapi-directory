import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InteractionsRemoveRestrictionsForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class InteractionsRemoveRestrictionsForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InteractionsRemoveRestrictionsForOrgPathParams;
}


export class InteractionsRemoveRestrictionsForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
