import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Electioneering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @SpeakeasyMetadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=calculated_candidate_share" })
  calculatedCandidateShare?: number;

  @SpeakeasyMetadata({ data: "json, name=candidate_district" })
  candidateDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_state" })
  candidateState?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=communication_date" })
  communicationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=disbursement_amount" })
  disbursementAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=disbursement_date" })
  disbursementDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=election_type" })
  electionType?: string;

  @SpeakeasyMetadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=link_id" })
  linkId?: number;

  @SpeakeasyMetadata({ data: "json, name=number_of_candidates" })
  numberOfCandidates?: number;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_state" })
  payeeState?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=public_distribution_date" })
  publicDistributionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purpose_description" })
  purposeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=sb_image_num" })
  sbImageNum?: string;

  @SpeakeasyMetadata({ data: "json, name=sb_link_id" })
  sbLinkId?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_id" })
  subId?: number;
}
