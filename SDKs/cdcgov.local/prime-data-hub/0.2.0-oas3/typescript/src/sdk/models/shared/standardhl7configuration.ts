import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SftpTransport } from "./sftptransport";
import { As2Transport } from "./as2transport";
import { BlobStoreTransport } from "./blobstoretransport";
import { NullTransport } from "./nulltransport";


export enum StandardHl7ConfigurationPhoneNumberFormattingEnum {
    Standard = "STANDARD",
    OnlyDigitsInComponentOne = "ONLY_DIGITS_IN_COMPONENT_ONE",
    AreaLocalInComponentOne = "AREA_LOCAL_IN_COMPONENT_ONE"
}


// StandardHl7Configuration
/** 
 * A standard HL7 configuration
**/
export class StandardHl7Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=convertTimestampToDateTime" })
  convertTimestampToDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultAoeToUnknown" })
  defaultAoeToUnknown?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeAOE" })
  includeAoe: boolean;

  @SpeakeasyMetadata({ data: "json, name=nameFormat" })
  nameFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumberFormatting" })
  phoneNumberFormatting?: StandardHl7ConfigurationPhoneNumberFormattingEnum;

  @SpeakeasyMetadata({ data: "json, name=receivingApplicationName" })
  receivingApplicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=receivingApplicationOID" })
  receivingApplicationOid?: string;

  @SpeakeasyMetadata({ data: "json, name=receivingFacilityName" })
  receivingFacilityName?: string;

  @SpeakeasyMetadata({ data: "json, name=receivingFacilityOID" })
  receivingFacilityOid?: string;

  @SpeakeasyMetadata({ data: "json, name=receivingOrganization" })
  receivingOrganization?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingFacilityId" })
  reportingFacilityId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingFacilityIdType" })
  reportingFacilityIdType?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingFacilityName" })
  reportingFacilityName?: string;

  @SpeakeasyMetadata({ data: "json, name=suppressAoe" })
  suppressAoe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suppressHl7Fields" })
  suppressHl7Fields?: string;

  @SpeakeasyMetadata({ data: "json, name=suppressQstForAoe" })
  suppressQstForAoe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transport" })
  transport: any;

  @SpeakeasyMetadata({ data: "json, name=truncateHDNamespaceIds" })
  truncateHdNamespaceIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=useBatchHeaders" })
  useBatchHeaders: boolean;

  @SpeakeasyMetadata({ data: "json, name=useBlankInsteadOfUnknown" })
  useBlankInsteadOfUnknown?: string;

  @SpeakeasyMetadata({ data: "json, name=usePid14ForPatientEmail" })
  usePid14ForPatientEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useTestProcessingMode" })
  useTestProcessingMode?: boolean;
}
