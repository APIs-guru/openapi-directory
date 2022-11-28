import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleRegistrationEntity } from "./bundleregistrationentity";


export enum BundleDownloadEntityDownloadMethodEnum {
    File = "file",
    FullZip = "full_zip"
}


// BundleDownloadEntity
/** 
 * List Bundle Downloads
**/
export class BundleDownloadEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundle_registration" })
  bundleRegistration?: BundleRegistrationEntity;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=download_method" })
  downloadMethod?: BundleDownloadEntityDownloadMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
