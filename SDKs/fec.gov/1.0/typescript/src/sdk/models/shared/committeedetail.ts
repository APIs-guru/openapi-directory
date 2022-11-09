import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommitteeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=affiliated_committee_name" })
  affiliatedCommitteeName?: string;

  @Metadata({ data: "json, name=candidate_ids" })
  candidateIds?: string[];

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @Metadata({ data: "json, name=custodian_city" })
  custodianCity?: string;

  @Metadata({ data: "json, name=custodian_name_1" })
  custodianName1?: string;

  @Metadata({ data: "json, name=custodian_name_2" })
  custodianName2?: string;

  @Metadata({ data: "json, name=custodian_name_full" })
  custodianNameFull?: string;

  @Metadata({ data: "json, name=custodian_name_middle" })
  custodianNameMiddle?: string;

  @Metadata({ data: "json, name=custodian_name_prefix" })
  custodianNamePrefix?: string;

  @Metadata({ data: "json, name=custodian_name_suffix" })
  custodianNameSuffix?: string;

  @Metadata({ data: "json, name=custodian_name_title" })
  custodianNameTitle?: string;

  @Metadata({ data: "json, name=custodian_phone" })
  custodianPhone?: string;

  @Metadata({ data: "json, name=custodian_state" })
  custodianState?: string;

  @Metadata({ data: "json, name=custodian_street_1" })
  custodianStreet1?: string;

  @Metadata({ data: "json, name=custodian_street_2" })
  custodianStreet2?: string;

  @Metadata({ data: "json, name=custodian_zip" })
  custodianZip?: string;

  @Metadata({ data: "json, name=cycles" })
  cycles?: number[];

  @Metadata({ data: "json, name=designation" })
  designation?: string;

  @Metadata({ data: "json, name=designation_full" })
  designationFull?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @Metadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @Metadata({ data: "json, name=form_type" })
  formType?: string;

  @Metadata({ data: "json, name=last_file_date" })
  lastFileDate?: Date;

  @Metadata({ data: "json, name=leadership_pac" })
  leadershipPac?: string;

  @Metadata({ data: "json, name=lobbyist_registrant_pac" })
  lobbyistRegistrantPac?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization_type" })
  organizationType?: string;

  @Metadata({ data: "json, name=organization_type_full" })
  organizationTypeFull?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=party_full" })
  partyFull?: string;

  @Metadata({ data: "json, name=party_type" })
  partyType?: string;

  @Metadata({ data: "json, name=party_type_full" })
  partyTypeFull?: string;

  @Metadata({ data: "json, name=sponsor_candidate_ids" })
  sponsorCandidateIds?: string[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=state_full" })
  stateFull?: string;

  @Metadata({ data: "json, name=street_1" })
  street1?: string;

  @Metadata({ data: "json, name=street_2" })
  street2?: string;

  @Metadata({ data: "json, name=treasurer_city" })
  treasurerCity?: string;

  @Metadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @Metadata({ data: "json, name=treasurer_name_1" })
  treasurerName1?: string;

  @Metadata({ data: "json, name=treasurer_name_2" })
  treasurerName2?: string;

  @Metadata({ data: "json, name=treasurer_name_middle" })
  treasurerNameMiddle?: string;

  @Metadata({ data: "json, name=treasurer_name_prefix" })
  treasurerNamePrefix?: string;

  @Metadata({ data: "json, name=treasurer_name_suffix" })
  treasurerNameSuffix?: string;

  @Metadata({ data: "json, name=treasurer_name_title" })
  treasurerNameTitle?: string;

  @Metadata({ data: "json, name=treasurer_phone" })
  treasurerPhone?: string;

  @Metadata({ data: "json, name=treasurer_state" })
  treasurerState?: string;

  @Metadata({ data: "json, name=treasurer_street_1" })
  treasurerStreet1?: string;

  @Metadata({ data: "json, name=treasurer_street_2" })
  treasurerStreet2?: string;

  @Metadata({ data: "json, name=treasurer_zip" })
  treasurerZip?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
