import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";



export class ScheduleAEfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_id" })
  conduitCommitteeId?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_name" })
  conduitCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_state" })
  conduitCommitteeState?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_street1" })
  conduitCommitteeStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_street2" })
  conduitCommitteeStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=conduit_committee_zip" })
  conduitCommitteeZip?: number;

  @SpeakeasyMetadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=contribution_receipt_date" })
  contributionReceiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=contributor_aggregate_ytd" })
  contributorAggregateYtd?: number;

  @SpeakeasyMetadata({ data: "json, name=contributor_city" })
  contributorCity?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_employer" })
  contributorEmployer?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_first_name" })
  contributorFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_last_name" })
  contributorLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_middle_name" })
  contributorMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_name" })
  contributorName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_occupation" })
  contributorOccupation?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_prefix" })
  contributorPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_state" })
  contributorState?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_suffix" })
  contributorSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_zip" })
  contributorZip?: string;

  @SpeakeasyMetadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_election_type_desc" })
  fecElectionTypeDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber: number;

  @SpeakeasyMetadata({ data: "json, name=filing" })
  filing?: EFilings;

  @SpeakeasyMetadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=load_timestamp" })
  loadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=memo_text" })
  memoText?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pgo" })
  pgo?: string;

  @SpeakeasyMetadata({ data: "json, name=related_line_number" })
  relatedLineNumber: number;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
