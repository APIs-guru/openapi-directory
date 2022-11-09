import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BundleRegistrationEntity } from "./bundleregistrationentity";

export enum BundleDownloadEntityDownloadMethodEnum {
    File = "file"
,    FullZip = "full_zip"
}


// BundleDownloadEntity
/** 
 * List Bundle Downloads
**/
export class BundleDownloadEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundle_registration" })
  bundleRegistration?: BundleRegistrationEntity;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=download_method" })
  downloadMethod?: BundleDownloadEntityDownloadMethodEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
