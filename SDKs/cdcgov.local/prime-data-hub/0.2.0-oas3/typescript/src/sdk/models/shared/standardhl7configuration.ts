import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SftpTransport } from "./sftptransport";
import { As2Transport } from "./as2transport";
import { BlobStoreTransport } from "./blobstoretransport";
import { NullTransport } from "./nulltransport";

export enum StandardHl7ConfigurationPhoneNumberFormattingEnum {
    Standard = "STANDARD"
,    OnlyDigitsInComponentOne = "ONLY_DIGITS_IN_COMPONENT_ONE"
,    AreaLocalInComponentOne = "AREA_LOCAL_IN_COMPONENT_ONE"
}


// StandardHl7Configuration
/** 
 * A standard HL7 configuration
**/
export class StandardHl7Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=convertTimestampToDateTime" })
  convertTimestampToDateTime?: string;

  @Metadata({ data: "json, name=defaultAoeToUnknown" })
  defaultAoeToUnknown?: boolean;

  @Metadata({ data: "json, name=includeAOE" })
  includeAoe: boolean;

  @Metadata({ data: "json, name=nameFormat" })
  nameFormat?: string;

  @Metadata({ data: "json, name=phoneNumberFormatting" })
  phoneNumberFormatting?: StandardHl7ConfigurationPhoneNumberFormattingEnum;

  @Metadata({ data: "json, name=receivingApplicationName" })
  receivingApplicationName?: string;

  @Metadata({ data: "json, name=receivingApplicationOID" })
  receivingApplicationOid?: string;

  @Metadata({ data: "json, name=receivingFacilityName" })
  receivingFacilityName?: string;

  @Metadata({ data: "json, name=receivingFacilityOID" })
  receivingFacilityOid?: string;

  @Metadata({ data: "json, name=receivingOrganization" })
  receivingOrganization?: string;

  @Metadata({ data: "json, name=reportingFacilityId" })
  reportingFacilityId?: string;

  @Metadata({ data: "json, name=reportingFacilityIdType" })
  reportingFacilityIdType?: string;

  @Metadata({ data: "json, name=reportingFacilityName" })
  reportingFacilityName?: string;

  @Metadata({ data: "json, name=suppressAoe" })
  suppressAoe?: boolean;

  @Metadata({ data: "json, name=suppressHl7Fields" })
  suppressHl7Fields?: string;

  @Metadata({ data: "json, name=suppressQstForAoe" })
  suppressQstForAoe?: boolean;

  @Metadata({ data: "json, name=transport" })
  transport: any;

  @Metadata({ data: "json, name=truncateHDNamespaceIds" })
  truncateHdNamespaceIds?: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=useBatchHeaders" })
  useBatchHeaders: boolean;

  @Metadata({ data: "json, name=useBlankInsteadOfUnknown" })
  useBlankInsteadOfUnknown?: string;

  @Metadata({ data: "json, name=usePid14ForPatientEmail" })
  usePid14ForPatientEmail?: boolean;

  @Metadata({ data: "json, name=useTestProcessingMode" })
  useTestProcessingMode?: boolean;
}
