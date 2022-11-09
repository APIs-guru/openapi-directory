import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


export class DetectCustomLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Image" })
  image: Image;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;

  @Metadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
