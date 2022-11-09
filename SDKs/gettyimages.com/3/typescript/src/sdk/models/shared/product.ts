import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DownloadRequirements } from "./downloadrequirements";
import { OverageDetails } from "./overagedetails";
import { ProductStatusEnum } from "./productstatusenum";
import { ProductTypeResponseEnum } from "./producttyperesponseenum";


export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=agreement_name" })
  agreementName?: string;

  @Metadata({ data: "json, name=application_website" })
  applicationWebsite?: string;

  @Metadata({ data: "json, name=credits_remaining" })
  creditsRemaining?: number;

  @Metadata({ data: "json, name=download_limit" })
  downloadLimit?: number;

  @Metadata({ data: "json, name=download_limit_duration" })
  downloadLimitDuration?: string;

  @Metadata({ data: "json, name=download_limit_reset_utc_date" })
  downloadLimitResetUtcDate?: Date;

  @Metadata({ data: "json, name=download_requirements" })
  downloadRequirements?: DownloadRequirements;

  @Metadata({ data: "json, name=downloads_remaining" })
  downloadsRemaining?: number;

  @Metadata({ data: "json, name=expiration_utc_date" })
  expirationUtcDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=imagepack_resolution" })
  imagepackResolution?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overage" })
  overage?: OverageDetails;

  @Metadata({ data: "json, name=status" })
  status?: ProductStatusEnum;

  @Metadata({ data: "json, name=team_credits" })
  teamCredits?: number;

  @Metadata({ data: "json, name=type" })
  type?: ProductTypeResponseEnum;
}
