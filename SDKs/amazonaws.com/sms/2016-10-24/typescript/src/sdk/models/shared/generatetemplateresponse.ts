import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



export class GenerateTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
