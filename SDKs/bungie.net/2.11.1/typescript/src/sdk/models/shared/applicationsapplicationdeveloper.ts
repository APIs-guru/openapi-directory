import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";



export class ApplicationsApplicationDeveloper extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiEulaVersion?: number;

  @SpeakeasyMetadata()
  role?: number;

  @SpeakeasyMetadata()
  user?: UserUserInfoCard;
}
