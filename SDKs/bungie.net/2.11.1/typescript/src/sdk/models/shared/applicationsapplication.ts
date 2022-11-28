import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsApplicationDeveloper } from "./applicationsapplicationdeveloper";



export class ApplicationsApplication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationId?: number;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  firstPublished?: Date;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  origin?: string;

  @SpeakeasyMetadata()
  redirectUrl?: string;

  @SpeakeasyMetadata()
  scope?: number;

  @SpeakeasyMetadata()
  status?: number;

  @SpeakeasyMetadata()
  statusChanged?: Date;

  @SpeakeasyMetadata({ elemType: ApplicationsApplicationDeveloper })
  team?: ApplicationsApplicationDeveloper[];
}
