import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Electioneering extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendment_indicator" })
  amendmentIndicator?: string;

  @Metadata({ data: "json, name=beginning_image_number" })
  beginningImageNumber?: string;

  @Metadata({ data: "json, name=calculated_candidate_share" })
  calculatedCandidateShare?: number;

  @Metadata({ data: "json, name=candidate_district" })
  candidateDistrict?: string;

  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @Metadata({ data: "json, name=candidate_office" })
  candidateOffice?: string;

  @Metadata({ data: "json, name=candidate_state" })
  candidateState?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=communication_date" })
  communicationDate?: Date;

  @Metadata({ data: "json, name=disbursement_amount" })
  disbursementAmount?: number;

  @Metadata({ data: "json, name=disbursement_date" })
  disbursementDate?: Date;

  @Metadata({ data: "json, name=election_type" })
  electionType?: string;

  @Metadata({ data: "json, name=file_number" })
  fileNumber?: number;

  @Metadata({ data: "json, name=link_id" })
  linkId?: number;

  @Metadata({ data: "json, name=number_of_candidates" })
  numberOfCandidates?: number;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=payee_state" })
  payeeState?: string;

  @Metadata({ data: "json, name=pdf_url" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=public_distribution_date" })
  publicDistributionDate?: Date;

  @Metadata({ data: "json, name=purpose_description" })
  purposeDescription?: string;

  @Metadata({ data: "json, name=receipt_date" })
  receiptDate?: Date;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=sb_image_num" })
  sbImageNum?: string;

  @Metadata({ data: "json, name=sb_link_id" })
  sbLinkId?: string;

  @Metadata({ data: "json, name=sub_id" })
  subId?: number;
}
