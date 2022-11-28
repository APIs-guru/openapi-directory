import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class DetectCustomLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
