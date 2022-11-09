import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddCommunicationToCaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @Metadata({ data: "json, name=caseId" })
  caseId?: string;

  @Metadata({ data: "json, name=ccEmailAddresses" })
  ccEmailAddresses?: string[];

  @Metadata({ data: "json, name=communicationBody" })
  communicationBody: string;
}
