import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Kdfparams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dklen" })
  dklen: number;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n: number;

  @SpeakeasyMetadata({ data: "json, name=p" })
  p: number;

  @SpeakeasyMetadata({ data: "json, name=r" })
  r: number;

  @SpeakeasyMetadata({ data: "json, name=salt" })
  salt: string;
}
