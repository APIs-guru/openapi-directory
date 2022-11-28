import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InteractionsGetRestrictionsForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class InteractionsGetRestrictionsForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InteractionsGetRestrictionsForOrgPathParams;
}


export class InteractionsGetRestrictionsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
