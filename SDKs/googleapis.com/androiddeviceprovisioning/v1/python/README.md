# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest(
    path_params=operations.AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams(
        parent="ut",
    ),
    query_params=operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams(
        dollar_xgafv="1",
        access_token="doloribus",
        alt="proto",
        callback="excepturi",
        fields="repellendus",
        key="nihil",
        oauth_token="quasi",
        pretty_print=False,
        quota_user="ut",
        upload_type="dolorem",
        upload_protocol="quis",
    ),
    request=shared.ConfigurationInput(
        company_name="aut",
        configuration_name="qui",
        contact_email="laborum",
        contact_phone="quod",
        custom_message="eius",
        dpc_extras="officia",
        dpc_resource_path="inventore",
        is_default=True,
    ),
)
    
res = s.customers.androiddeviceprovisioning_customers_configurations_create(req)

if res.configuration is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `androiddeviceprovisioning_customers_configurations_create` - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* `androiddeviceprovisioning_customers_configurations_delete` - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* `androiddeviceprovisioning_customers_configurations_list` - Lists a customer's configurations.
* `androiddeviceprovisioning_customers_configurations_patch` - Updates a configuration's field values.
* `androiddeviceprovisioning_customers_devices_apply_configuration` - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* `androiddeviceprovisioning_customers_devices_list` - Lists a customer's devices.
* `androiddeviceprovisioning_customers_devices_remove_configuration` - Removes a configuration from device.
* `androiddeviceprovisioning_customers_devices_unclaim` - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* `androiddeviceprovisioning_customers_dpcs_list` - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* `androiddeviceprovisioning_customers_list` - Lists the user's customer accounts.

### partners

* `androiddeviceprovisioning_partners_customers_create` - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* `androiddeviceprovisioning_partners_customers_list` - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* `androiddeviceprovisioning_partners_devices_claim` - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* `androiddeviceprovisioning_partners_devices_claim_async` - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* `androiddeviceprovisioning_partners_devices_find_by_identifier` - Finds devices by hardware identifiers, such as IMEI.
* `androiddeviceprovisioning_partners_devices_find_by_owner` - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* `androiddeviceprovisioning_partners_devices_get` - Gets a device.
* `androiddeviceprovisioning_partners_devices_metadata` - Updates reseller metadata associated with the device. Android devices only.
* `androiddeviceprovisioning_partners_devices_unclaim` - Unclaims a device from a customer and removes it from zero-touch enrollment.
* `androiddeviceprovisioning_partners_devices_unclaim_async` - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* `androiddeviceprovisioning_partners_devices_update_metadata_async` - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* `androiddeviceprovisioning_partners_vendors_customers_list` - Lists the customers of the vendor.
* `androiddeviceprovisioning_partners_vendors_list` - Lists the vendors of the partner.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
