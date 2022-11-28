import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddCommunicationToCaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=ccEmailAddresses" })
  ccEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=communicationBody" })
  communicationBody: string;
}
