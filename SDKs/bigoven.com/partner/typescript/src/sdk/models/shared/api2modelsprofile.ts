import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api2ModelsCounts } from "./api2modelscounts";



export class Api2ModelsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AboutMe, form, name=AboutMe;" })
  aboutMe?: string;

  @SpeakeasyMetadata({ data: "json, name=BackgroundUrl, form, name=BackgroundUrl;" })
  backgroundUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Counts, form, name=Counts;" })
  counts?: Api2ModelsCounts;

  @SpeakeasyMetadata({ data: "json, name=FirstName, form, name=FirstName;" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=FullName, form, name=FullName;" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeUrl, form, name=HomeUrl;" })
  homeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName, form, name=LastName;" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl, form, name=PhotoUrl;" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserName, form, name=UserName;" })
  userName?: string;
}
