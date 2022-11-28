import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ElectionDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_election" })
  activeElection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=create_date" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=election_date" })
  electionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=election_district" })
  electionDistrict?: number;

  @SpeakeasyMetadata({ data: "json, name=election_notes" })
  electionNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=election_party" })
  electionParty?: string;

  @SpeakeasyMetadata({ data: "json, name=election_state" })
  electionState?: string;

  @SpeakeasyMetadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=election_type_id" })
  electionTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=office_sought" })
  officeSought?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_general_date" })
  primaryGeneralDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
