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
    
req = operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest(
    security=operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams(
        location="omnis",
        project="molestiae",
    ),
    query_params=operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams(
        dollar_xgafv="1",
        access_token="rerum",
        alt="proto",
        callback="minima",
        fields="dignissimos",
        key="quas",
        oauth_token="ut",
        pretty_print=True,
        quota_user="omnis",
        upload_type="laboriosam",
        upload_protocol="quaerat",
    ),
    request=shared.SubmitProvisioningConfigRequest(
        email="at",
        provisioning_config=shared.ProvisioningConfig(
            instances=[
                shared.InstanceConfig(
                    client_network=shared.NetworkAddress(
                        address="voluptas",
                        existing_network_id="doloremque",
                        network_id="sint",
                    ),
                    hyperthreading=True,
                    id="incidunt",
                    instance_type="ad",
                    location="explicabo",
                    os_image="sunt",
                    private_network=shared.NetworkAddress(
                        address="qui",
                        existing_network_id="at",
                        network_id="expedita",
                    ),
                    user_note="rerum",
                ),
                shared.InstanceConfig(
                    client_network=shared.NetworkAddress(
                        address="iste",
                        existing_network_id="modi",
                        network_id="error",
                    ),
                    hyperthreading=True,
                    id="ut",
                    instance_type="temporibus",
                    location="sint",
                    os_image="harum",
                    private_network=shared.NetworkAddress(
                        address="minima",
                        existing_network_id="quia",
                        network_id="quisquam",
                    ),
                    user_note="minus",
                ),
                shared.InstanceConfig(
                    client_network=shared.NetworkAddress(
                        address="provident",
                        existing_network_id="aut",
                        network_id="illo",
                    ),
                    hyperthreading=False,
                    id="aspernatur",
                    instance_type="illo",
                    location="ut",
                    os_image="et",
                    private_network=shared.NetworkAddress(
                        address="non",
                        existing_network_id="aliquam",
                        network_id="ipsa",
                    ),
                    user_note="expedita",
                ),
            ],
            networks=[
                shared.NetworkConfig(
                    bandwidth="BW_5_GBPS",
                    cidr="temporibus",
                    id="quidem",
                    location="rerum",
                    service_cidr="HIGH_28",
                    type="CLIENT",
                    user_note="voluptatem",
                    vlan_attachments=[
                        shared.VlanAttachment(
                            id="asperiores",
                            pairing_key="sit",
                        ),
                        shared.VlanAttachment(
                            id="dolorum",
                            pairing_key="animi",
                        ),
                        shared.VlanAttachment(
                            id="aperiam",
                            pairing_key="omnis",
                        ),
                    ],
                ),
                shared.NetworkConfig(
                    bandwidth="BW_2_GBPS",
                    cidr="consectetur",
                    id="repudiandae",
                    location="quasi",
                    service_cidr="SERVICE_CIDR_UNSPECIFIED",
                    type="PRIVATE",
                    user_note="necessitatibus",
                    vlan_attachments=[
                        shared.VlanAttachment(
                            id="sit",
                            pairing_key="expedita",
                        ),
                        shared.VlanAttachment(
                            id="sunt",
                            pairing_key="ut",
                        ),
                    ],
                ),
                shared.NetworkConfig(
                    bandwidth="BW_1_GBPS",
                    cidr="sapiente",
                    id="culpa",
                    location="sed",
                    service_cidr="HIGH_28",
                    type="PRIVATE",
                    user_note="rerum",
                    vlan_attachments=[
                        shared.VlanAttachment(
                            id="quis",
                            pairing_key="aliquam",
                        ),
                        shared.VlanAttachment(
                            id="quam",
                            pairing_key="officiis",
                        ),
                        shared.VlanAttachment(
                            id="sequi",
                            pairing_key="magni",
                        ),
                    ],
                ),
            ],
            ticket_id="et",
            volumes=[
                shared.VolumeConfig(
                    id="ducimus",
                    location="distinctio",
                    lun_ranges=[
                        shared.LunRange(
                            quantity=740268334717324780,
                            size_gb=7481213423248665986,
                        ),
                    ],
                    machine_ids=[
                        "et",
                        "rerum",
                        "accusamus",
                    ],
                    nfs_exports=[
                        shared.NfsExport(
                            allow_dev=True,
                            allow_suid=False,
                            cidr="ut",
                            machine_id="placeat",
                            network_id="consectetur",
                            no_root_squash=True,
                            permissions="PERMISSIONS_UNSPECIFIED",
                        ),
                    ],
                    protocol="PROTOCOL_NFS",
                    size_gb=2389271512943804651,
                    snapshots_enabled=True,
                    type="FLASH",
                    user_note="exercitationem",
                ),
            ],
        ),
    ),
)
    
res = s.projects.baremetalsolution_projects_locations_submit_provisioning_config(req)

if res.provisioning_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `baremetalsolution_projects_locations_submit_provisioning_config` - Submit a provisiong configuration for a given project.
* `baremetalsolution_projects_provisioning_quotas_list` - List the budget details to provision resources on a given project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
