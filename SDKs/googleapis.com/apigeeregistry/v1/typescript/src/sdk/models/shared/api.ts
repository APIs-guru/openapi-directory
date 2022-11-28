import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiInput
/** 
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
export class ApiInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendedDeployment" })
  recommendedDeployment?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendedVersion" })
  recommendedVersion?: string;
}


// Api
/** 
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
export class Api extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendedDeployment" })
  recommendedDeployment?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendedVersion" })
  recommendedVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
