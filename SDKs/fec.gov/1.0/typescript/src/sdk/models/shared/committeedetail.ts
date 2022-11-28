import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommitteeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" })
  affiliatedCommitteeName?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_ids" })
  candidateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_city" })
  custodianCity?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_1" })
  custodianName1?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_2" })
  custodianName2?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_full" })
  custodianNameFull?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_middle" })
  custodianNameMiddle?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_prefix" })
  custodianNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_suffix" })
  custodianNameSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_name_title" })
  custodianNameTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_phone" })
  custodianPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_state" })
  custodianState?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_street_1" })
  custodianStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_street_2" })
  custodianStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=custodian_zip" })
  custodianZip?: string;

  @SpeakeasyMetadata({ data: "json, name=cycles" })
  cycles?: number[];

  @SpeakeasyMetadata({ data: "json, name=designation" })
  designation?: string;

  @SpeakeasyMetadata({ data: "json, name=designation_full" })
  designationFull?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=filing_frequency" })
  filingFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=first_file_date" })
  firstFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=form_type" })
  formType?: string;

  @SpeakeasyMetadata({ data: "json, name=last_file_date" })
  lastFileDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=leadership_pac" })
  leadershipPac?: string;

  @SpeakeasyMetadata({ data: "json, name=lobbyist_registrant_pac" })
  lobbyistRegistrantPac?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_type" })
  organizationType?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_type_full" })
  organizationTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=party_full" })
  partyFull?: string;

  @SpeakeasyMetadata({ data: "json, name=party_type" })
  partyType?: string;

  @SpeakeasyMetadata({ data: "json, name=party_type_full" })
  partyTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=sponsor_candidate_ids" })
  sponsorCandidateIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=state_full" })
  stateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=street_1" })
  street1?: string;

  @SpeakeasyMetadata({ data: "json, name=street_2" })
  street2?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_city" })
  treasurerCity?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name" })
  treasurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name_1" })
  treasurerName1?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name_2" })
  treasurerName2?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name_middle" })
  treasurerNameMiddle?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name_prefix" })
  treasurerNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name_suffix" })
  treasurerNameSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_name_title" })
  treasurerNameTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_phone" })
  treasurerPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_state" })
  treasurerState?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_street_1" })
  treasurerStreet1?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_street_2" })
  treasurerStreet2?: string;

  @SpeakeasyMetadata({ data: "json, name=treasurer_zip" })
  treasurerZip?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
