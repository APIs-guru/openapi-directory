import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";



export class UserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails: Email[];

  @SpeakeasyMetadata({ data: "json, name=employee_number" })
  employeeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class UserOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails: Email[];

  @SpeakeasyMetadata({ data: "json, name=employee_number" })
  employeeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
