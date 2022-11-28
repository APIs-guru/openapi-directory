import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logId" })
  logId?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
