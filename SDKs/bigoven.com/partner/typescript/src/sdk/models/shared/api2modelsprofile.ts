import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Api2ModelsCounts } from "./api2modelscounts";


export class Api2ModelsProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=AboutMe, form, name=AboutMe;" })
  aboutMe?: string;

  @Metadata({ data: "json, name=BackgroundUrl, form, name=BackgroundUrl;" })
  backgroundUrl?: string;

  @Metadata({ data: "json, name=Counts, form, name=Counts;" })
  counts?: Api2ModelsCounts;

  @Metadata({ data: "json, name=FirstName, form, name=FirstName;" })
  firstName?: string;

  @Metadata({ data: "json, name=FullName, form, name=FullName;" })
  fullName?: string;

  @Metadata({ data: "json, name=HomeUrl, form, name=HomeUrl;" })
  homeUrl?: string;

  @Metadata({ data: "json, name=LastName, form, name=LastName;" })
  lastName?: string;

  @Metadata({ data: "json, name=PhotoUrl, form, name=PhotoUrl;" })
  photoUrl?: string;

  @Metadata({ data: "json, name=UserID, form, name=UserID;" })
  userId?: number;

  @Metadata({ data: "json, name=UserName, form, name=UserName;" })
  userName?: string;
}
