import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InteractionsRemoveRestrictionsForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class InteractionsRemoveRestrictionsForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InteractionsRemoveRestrictionsForOrgPathParams;
}


export class InteractionsRemoveRestrictionsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
