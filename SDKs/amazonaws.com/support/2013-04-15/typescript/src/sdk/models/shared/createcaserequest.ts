import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryCode" })
  categoryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ccEmailAddresses" })
  ccEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=communicationBody" })
  communicationBody: string;

  @SpeakeasyMetadata({ data: "json, name=issueType" })
  issueType?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceCode" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=severityCode" })
  severityCode?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;
}
