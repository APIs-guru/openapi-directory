import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RadAnalyst extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyst_id" })
  analystId?: number;

  @Metadata({ data: "json, name=analyst_short_id" })
  analystShortId?: number;

  @Metadata({ data: "json, name=assignment_update_date" })
  assignmentUpdateDate?: Date;

  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=rad_branch" })
  radBranch?: string;

  @Metadata({ data: "json, name=telephone_ext" })
  telephoneExt?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
