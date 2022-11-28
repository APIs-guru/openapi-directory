import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListProvisioningArtifactsForServiceActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
