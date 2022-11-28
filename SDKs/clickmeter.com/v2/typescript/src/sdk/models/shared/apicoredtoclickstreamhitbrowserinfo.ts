import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoClickStreamHitBrowserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browserType" })
  browserType?: string;

  @SpeakeasyMetadata({ data: "json, name=familyId" })
  familyId?: number;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
