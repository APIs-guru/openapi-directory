import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ElectionDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_election" })
  activeElection?: boolean;

  @Metadata({ data: "json, name=create_date" })
  createDate?: Date;

  @Metadata({ data: "json, name=election_date" })
  electionDate?: Date;

  @Metadata({ data: "json, name=election_district" })
  electionDistrict?: number;

  @Metadata({ data: "json, name=election_notes" })
  electionNotes?: string;

  @Metadata({ data: "json, name=election_party" })
  electionParty?: string;

  @Metadata({ data: "json, name=election_state" })
  electionState?: string;

  @Metadata({ data: "json, name=election_type_full" })
  electionTypeFull?: string;

  @Metadata({ data: "json, name=election_type_id" })
  electionTypeId?: string;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;

  @Metadata({ data: "json, name=office_sought" })
  officeSought?: string;

  @Metadata({ data: "json, name=primary_general_date" })
  primaryGeneralDate?: Date;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
