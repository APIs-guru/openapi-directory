import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";


export class ScheduleAEfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=back_reference_schedule_name" })
  backReferenceScheduleName?: string;

  @Metadata({ data: "json, name=back_reference_transaction_id" })
  backReferenceTransactionId?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=committee" })
  committee?: CommitteeHistory;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=conduit_committee_city" })
  conduitCommitteeCity?: string;

  @Metadata({ data: "json, name=conduit_committee_id" })
  conduitCommitteeId?: string;

  @Metadata({ data: "json, name=conduit_committee_name" })
  conduitCommitteeName?: string;

  @Metadata({ data: "json, name=conduit_committee_state" })
  conduitCommitteeState?: string;

  @Metadata({ data: "json, name=conduit_committee_street1" })
  conduitCommitteeStreet1?: string;

  @Metadata({ data: "json, name=conduit_committee_street2" })
  conduitCommitteeStreet2?: string;

  @Metadata({ data: "json, name=conduit_committee_zip" })
  conduitCommitteeZip?: number;

  @Metadata({ data: "json, name=contribution_receipt_amount" })
  contributionReceiptAmount?: number;

  @Metadata({ data: "json, name=contribution_receipt_date" })
  contributionReceiptDate?: Date;

  @Metadata({ data: "json, name=contributor_aggregate_ytd" })
  contributorAggregateYtd?: number;

  @Metadata({ data: "json, name=contributor_city" })
  contributorCity?: string;

  @Metadata({ data: "json, name=contributor_employer" })
  contributorEmployer?: string;

  @Metadata({ data: "json, name=contributor_first_name" })
  contributorFirstName?: string;

  @Metadata({ data: "json, name=contributor_last_name" })
  contributorLastName?: string;

  @Metadata({ data: "json, name=contributor_middle_name" })
  contributorMiddleName?: string;

  @Metadata({ data: "json, name=contributor_name" })
  contributorName?: string;

  @Metadata({ data: "json, name=contributor_occupation" })
  contributorOccupation?: string;

  @Metadata({ data: "json, name=contributor_prefix" })
  contributorPrefix?: string;

  @Metadata({ data: "json, name=contributor_state" })
  contributorState?: string;

  @Metadata({ data: "json, name=contributor_suffix" })
  contributorSuffix?: string;

  @Metadata({ data: "json, name=contributor_zip" })
  contributorZip?: string;

  @Metadata({ data: "json, name=csv_url" })
  csvUrl?: string;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: string;

  @Metadata({ data: "json, name=fec_election_type_desc" })
  fecElectionTypeDesc?: string;

  @Metadata({ data: "json, name=fec_url" })
  fecUrl?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber: number;

  @Metadata({ data: "json, name=filing" })
  filing?: EFilings;

  @Metadata({ data: "json, name=image_number" })
  imageNumber?: string;

  @Metadata({ data: "json, name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "json, name=load_timestamp" })
  loadTimestamp?: Date;

  @Metadata({ data: "json, name=memo_code" })
  memoCode?: string;

  @Metadata({ data: "json, name=memo_text" })
  memoText?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=pgo" })
  pgo?: string;

  @Metadata({ data: "json, name=related_line_number" })
  relatedLineNumber: number;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
