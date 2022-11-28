import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RadAnalyst extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyst_id" })
  analystId?: number;

  @SpeakeasyMetadata({ data: "json, name=analyst_short_id" })
  analystShortId?: number;

  @SpeakeasyMetadata({ data: "json, name=assignment_update_date" })
  assignmentUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=rad_branch" })
  radBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=telephone_ext" })
  telephoneExt?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
