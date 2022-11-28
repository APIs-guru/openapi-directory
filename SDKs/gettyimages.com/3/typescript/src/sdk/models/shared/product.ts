import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DownloadRequirements } from "./downloadrequirements";
import { OverageDetails } from "./overagedetails";
import { ProductStatusEnum } from "./productstatusenum";
import { ProductTypeResponseEnum } from "./producttyperesponseenum";



export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agreement_name" })
  agreementName?: string;

  @SpeakeasyMetadata({ data: "json, name=application_website" })
  applicationWebsite?: string;

  @SpeakeasyMetadata({ data: "json, name=credits_remaining" })
  creditsRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=download_limit" })
  downloadLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=download_limit_duration" })
  downloadLimitDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=download_limit_reset_utc_date" })
  downloadLimitResetUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=download_requirements" })
  downloadRequirements?: DownloadRequirements;

  @SpeakeasyMetadata({ data: "json, name=downloads_remaining" })
  downloadsRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration_utc_date" })
  expirationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=imagepack_resolution" })
  imagepackResolution?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overage" })
  overage?: OverageDetails;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProductStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=team_credits" })
  teamCredits?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ProductTypeResponseEnum;
}
