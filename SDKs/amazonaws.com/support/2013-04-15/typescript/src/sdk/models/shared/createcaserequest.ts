import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @Metadata({ data: "json, name=categoryCode" })
  categoryCode?: string;

  @Metadata({ data: "json, name=ccEmailAddresses" })
  ccEmailAddresses?: string[];

  @Metadata({ data: "json, name=communicationBody" })
  communicationBody: string;

  @Metadata({ data: "json, name=issueType" })
  issueType?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=serviceCode" })
  serviceCode?: string;

  @Metadata({ data: "json, name=severityCode" })
  severityCode?: string;

  @Metadata({ data: "json, name=subject" })
  subject: string;
}
