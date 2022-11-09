import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Root } from "./root";


export class EnablePolicyTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Root" })
  root?: Root;
}
