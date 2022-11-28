import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" })
  baseExteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" })
  baseInteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.CarCarTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" })
  carfax1Owner?: shared.Carfax1OwnerEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" })
  carfaxCleanTitle?: shared.CarfaxCleanTitleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" })
  cityMpgRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cylinders" })
  cylinders?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_id" })
  dealerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealer_type" })
  dealerType?: shared.DealerTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealership_group_name" })
  dealershipGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" })
  dom180Range?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" })
  domActiveRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dom_range" })
  domRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doors" })
  doors?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" })
  engineAspiration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exact" })
  exact?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" })
  financeDownPayment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" })
  financeDownPaymentPer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_emp" })
  financeEmp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" })
  financeLoanApr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" })
  financeLoanTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" })
  highwayMpgRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_sold" })
  includeSold?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" })
  interiorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" })
  leaseDownPayment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_emp" })
  leaseEmp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lease_term" })
  leaseTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles_range" })
  milesRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msa_code" })
  msaCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msrp_range" })
  msrpRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_range" })
  priceRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetMdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMdsQueryParams;
}


export class GetMdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  mds?: shared.Mds;

  @SpeakeasyMetadata()
  statusCode: number;
}
